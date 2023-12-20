cp .env ../skartner-instance/envs/skartner-admin/temp.env
cp ../skartner-instance/envs/skartner-admin/staging.env .env

yarn
yarn build

cp ../skartner-instance/envs/skartner-admin/temp.env .env

docker build \
 . -t rgskartner/skartner-admin \
 --platform linux/amd64

docker push rgskartner/skartner-admin

source ../skartner-instance/envs/skartner-jenkins/staging.env

# echo "JENKINS_API_KEY: $JENKINS_API_KEY"

curl -X POST http://jenkins.skartner.com/job/restart-skartner-admin/build --user dev-rahul:$JENKINS_API_KEY