# APITesterBoilerplate
This repo provides a quick way to do API testing, both manual and via Python powered automation. 

The APIs are mock requests from a local db file using [JSON-Server](https://pypi.org/project/json-server.py/).

#### STEP-1 How to start project
```
# I had to give required permissions to virtualenv
sudo chown $USER /usr/local/bin/virtualenv
sudo chmod +x /usr/local/bin/virtualenv
virtualenv .
# sudo chown -R $USER bin
# sudo chmod -R +x bin
source ./bin/activate
# pip3 install json-server.py
pip install -r requirements.txt
# pip freeze
```
(Commented out lines are one time settings that maybe needed, depending on system permissions to user)

#### STEP-2 How to start API server

```
json-server db.json
```

#### STEP-3 How to run python unit tests

```
python -m APITests -v
# Or debug APITests.py from vscode
```

# How to run HTML UI

```
# Install & Enable cors blocker extension: https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related?hl=en
python -m http.server 8000
# load http://localhost:8000/ui on web browser
```
