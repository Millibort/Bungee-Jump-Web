import os
import imageio
from scipy import misc

def to_hex(rgb):
    return '%02x%02x%02x' % rgb

path = 'C:/Users/Elias/Downloads/'
image= imageio.imread(os.path.join(path,'bigback.bmp')) 
#print(image)

y = len(image)
x = len(image[0])
print(x,y)

aray = []

for i in range(y):
    line = []
    for i2 in range(x):
        a = hex(image[i][i2][0]).split("0x")[1]
        if(len(a) == 1):
            a = "0" + a
        b = hex(image[i][i2][1]).split("0x")[1]
        if(len(b) == 1):
            b = "0" + b
        c = hex(image[i][i2][2]).split("0x")[1]
        if(len(c) == 1):
            c = "0" + c
        if(a+b+c == "aeaeae"):
            line.append("clear")
        else:
            line.append("#" + a + b + c)
    aray.append(line)
print(aray, sep=" ")
print(len(aray))