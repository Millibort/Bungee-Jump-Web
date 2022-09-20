import os
import imageio
from scipy import misc

def imgtolist():
    y = len(image)
    x = len(image[0])
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
    return(aray)

path = 'C:/Users/Elias/Downloads/'
if(input("Do you want to change path from downloads")):
    path = input("path")
type = input("background or tile?").lower()

if(type == "background"):
    image= imageio.imread(os.path.join(path, input("file name"))) 

elif(type == "tile"):
    images = []
    images.append(imageio.imread(os.path.join(path, input("file1 name"))))
    images.append(imageio.imread(os.path.join(path, input("file2 name"))))
    images.append(imageio.imread(os.path.join(path, input("file3 name"))))
    images.append(imageio.imread(os.path.join(path, input("file4 name"))))


os