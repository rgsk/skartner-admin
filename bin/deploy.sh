cp .env envs/temp.env
cp envs/staging.env .env

yarn build

cp envs/temp.env .env

docker build \
 . -t rgskartner/skartner-admin \
 --platform linux/amd64

docker push rgskartner/skartner-admin