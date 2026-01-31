FROM node:24.12.0-bookworm

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    git \
    sudo \
  && rm -rf /var/lib/apt/lists/*

RUN usermod -aG sudo node \
  && echo "node ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/node \
  && chmod 0440 /etc/sudoers.d/node

USER node
