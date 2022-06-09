# Check SWAP


1. **Check SWAP used by differnt PID**

```
for i in $(cd /proc;ls | grep "^[0-9]" | awk '$0>100'); do awk '/Swap:/{a=a+$2}END{print '"$i"',a/1024"M"}' /proc/$i/smaps;done| sort -k2nr | head
```

2. **Get the information about the PID**

```
ps aux | grep ${pid}
```


