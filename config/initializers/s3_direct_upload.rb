

S3DirectUpload.config do |c|
  c.access_key_id = "AKIAJ6CJWVDDUOA4K23Q"       # your access key id
  c.secret_access_key = "JBYUIY7SmtAUNR4g59bGipflBLV8zcAfronkUvFe"   # your secret access key
  c.bucket = "flimx"              # your bucket name
  c.region = nil             # region prefix of your bucket url. This is _required_ for the non-default AWS region, eg. "s3-eu-west-1"
  c.url = nil                # S3 API endpoint (optional), eg. "https://#{c.bucket}.s3.amazonaws.com/"
end

#
#config.paperclip_defaults = {
#  :storage => :s3,
#  :s3_credentials => {
#    :bucket => 'flimx',
#   :access_key_id =>'AKIAJ6CJWVDDUOA4K23Q'
#    :secret_access_key => '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'
# }
#}