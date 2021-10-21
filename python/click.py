import time
import subprocess

i = 0
sleep_time = 0.5

while i < 10:
    process = subprocess.Popen('adb shell input tap 100 100',shell=True)
    time.sleep(sleep_time)
    i+=1
