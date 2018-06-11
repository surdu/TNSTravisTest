curl --user a8a763660d2d4ac201950725e6ed371c600d8aed: \
  --request POST \
  --form revision=f5ebd957b0afb285f55bf05b2d03a667bfd108ea \
  --form config=@config.yml \
  --form notify=false \
    https://circleci.com/api/v1.1/project/github/surdu/TNSTravisTest/tree/master
