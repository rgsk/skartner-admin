cp .env ../envs/skartner-admin/temp.env
cp ../envs/skartner-admin/staging.env .env

yarn
yarn build

cp ../envs/skartner-admin/temp.env .env

docker build \
 . -t rgskartner/skartner-admin \
 --platform linux/amd64
