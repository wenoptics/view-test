#!/bin/bash

cd "$(dirname "$0")" || exit

# 80 port seem to need sudo
sudo python3 -m http.server 80
