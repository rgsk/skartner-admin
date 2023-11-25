docker build \
 $(for i in `cat envs/staging.env`; do out+="--build-arg $i " ; done; echo $out;out="") \
 . -t rgskartner/skartner-admin \
 --platform linux/amd64

docker push rgskartner/skartner-admin