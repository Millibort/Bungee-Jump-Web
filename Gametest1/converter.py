import os
import imageio
from scipy import misc

def to_hex(rgb):
    return '%02x%02x%02x' % rgb

path = 'C:/Users/Elias/Downloads/'
image= imageio.imread(os.path.join(path,'background1.bmp')) 
#print(image)

y = len(image)
x = len(image[0])

aray = []

for i in range(y - 1):
    line = []
    for i2 in range(x - 1):
        line.append("#" + hex(image[i][i2][0]).split("0x")[1] + hex(image[i][i2][1]).split("0x")[1] + hex(image[i][i2][3]).split("0x")[1])
    aray.append(line)
print(aray)
print(len(aray))