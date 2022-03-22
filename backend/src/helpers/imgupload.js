const dropboxV2Api = require("dropbox-v2-api");
const fs = require("fs");
require("dotenv").config();
const config = require("../util/secrets");
// console.log(config.dropboxToken)
// create session ref:
const dropbox = dropboxV2Api.authenticate({
  //   token: "sl.BEQl9MndDJ8H6h-WT98ICbx4Rb-uM92UeYVTOVN7PGnJDEJvTZ-YQvDqz3nf0ztc7ka2Gh9EJdIt7XJmAVmqj5jxqQmt1uV8IjTswy4oysr_SIPznwd68k5S_-XS7YY88gdnwiI",
  token:
    "sl.BETjvE-KWDLEE4eqwkYaib-q6i0K2mz43JPjthQ7cNUCv4ED7OduPVwa6s0YjOtQhsdknuo6cwisfVcN3ihvuIASpPYsB_ON0BjxKN54yrljuQZOxF5byCHtmd6CMx-EvQdPf5il_rec",
});

const uploadImg = async (uploadPath, filePath) => {
  dropbox(
    {
      resource: "files/upload",
      parameters: {
        path: uploadPath,
      },
      readStream: fs.createReadStream(filePath),
    },
    (err, result, response) => {
      if (err) {
        console.log("there's an error:", err);
      }
      console.log("Upload completed");
    }
  );
};
uploadImg("/files/pic.png", "../../../pic.png");
