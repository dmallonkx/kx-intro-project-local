version = 0.1
[default]
[default.deploy]
[default.deploy.parameters]
stack_name = "afdemo"
s3_bucket = "aws-sam-cli-managed-default-samclisourcebucket-15t79vurwqc4r"
s3_prefix = "afdemo"
region = "eu-west-2"
profile = "dev"
confirm_changeset = true
capabilities = "CAPABILITY_IAM"

[y]
[y.deploy]
[y.deploy.parameters]
stack_name = "afdemo"
s3_bucket = "aws-sam-cli-managed-default-samclisourcebucket-15t79vurwqc4r"
s3_prefix = "afdemo"
region = "eu-west-2"
profile = "dev"
confirm_changeset = true
capabilities = "CAPABILITY_IAM"
