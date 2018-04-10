# -*-coding:Latin-1 -*
import os,rasterio
import matplotlib.pyplot as plt
import numpy as np
import sys
from scipy import misc
from math import sqrt

b3 = sys.argv[1]
b4 = sys.argv[2]
b5 = sys.argv[3]
b8 = sys.argv[4]
nameAzote = sys.argv[5]

outfile = r'farmingData/'+nameAzote+'.tif'

with rasterio.open(b3) as b3:
    B3 = b3.read()
with rasterio.open(b4) as b4:
    B4 = b4.read()
with rasterio.open(b5) as b5:
    B5 = b5.read()
with rasterio.open(b8) as b8:
    B8 = b8.read()

indiceAzote = ((B5.astype(float)-B4.astype(float)-0.2*(B5.astype(float)-B3.astype(float)))*B5.astype(float)/B4.astype(float))/(1.5*(1.2*(B8.astype(float)-B3.astype(float))-2.5*(B4.astype(float)-B3.astype(float)))/(sqrt((2*B8.astype(float)+1)*(2*B8.astype(float)+1)-(6*B8.astype(float)-5*sqrt(B4.astype(float))))-0.5)
	
profile = b2.meta
profile.update(driver='GTiff')
profile.update(dtype=rasterio.float32)

with rasterio.open(outfile,'w', **profile) as dst:
    dst.write(bi.astype(rasterio.float32))
