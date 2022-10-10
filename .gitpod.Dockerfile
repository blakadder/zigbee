FROM gitpod/workspace-full

RUN apt update \
    && apt install -y libvips
