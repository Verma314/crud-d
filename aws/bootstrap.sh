yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_11.x | sudo -E bash -
yum install nodejs
npm install
npm install -g pm2
pm2 start app.js
pm2 save
pm2 startup

