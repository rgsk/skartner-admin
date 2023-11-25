yarn build

docker build \
 . -t rgskartner/skartner-admin \
 --platform linux/amd64

docker push rgskartner/skartner-admin