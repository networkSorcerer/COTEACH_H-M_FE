import React, { Component } from "react";
import { Button } from "@mui/material";

const CLOUDNAME = import.meta.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const UPLOADPRESET = import.meta.env.REACT_APP_CLOUDINARY_PRESET;

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: CLOUDNAME,
        uploadPreset: UPLOADPRESET,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          // DOM 요소를 직접 조작하는 대신 props로 전달된 콜백 함수만 호출
          this.props.uploadImage(result.info.secure_url);
        }
      } //https://cloudinary.com/documentation/react_image_and_video_upload
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <Button
        id="upload_widget"
        size="small"
        variant="contained"
        color="primary"
      >
        Upload Image +
      </Button>
    );
  }
}

export default CloudinaryUploadWidget;
