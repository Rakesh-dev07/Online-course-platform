const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const {
  uploadMediaToCloudinary,
  deleteMediaFromCloudinary,
} = require("../../helpers/cloudinary");

const router = express.Router();

// Multer setup (temporary local upload)
const upload = multer({ dest: "uploads/" });

// Helper to safely delete local files after upload
const deleteLocalFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error("Error deleting local file:", err);
    } else {
      console.log(`🧹 Deleted local file: ${path.basename(filePath)}`);
    }
  });
};

// =============== SINGLE UPLOAD ===============
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const result = await uploadMediaToCloudinary(req.file.path);

    // Delete local file after successful upload
    deleteLocalFile(req.file.path);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Error uploading file",
    });
  }
});

// =============== BULK UPLOAD ===============
router.post("/bulk-upload", upload.array("files", 10), async (req, res) => {
  try {
    const uploadPromises = req.files.map(async (fileItem) => {
      const result = await uploadMediaToCloudinary(fileItem.path);
      deleteLocalFile(fileItem.path); // cleanup each file
      return result;
    });

    const results = await Promise.all(uploadPromises);

    res.status(200).json({
      success: true,
      data: results,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Error in bulk uploading files",
    });
  }
});

// =============== DELETE FROM CLOUDINARY ===============
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Asset ID is required",
      });
    }

    await deleteMediaFromCloudinary(id);

    res.status(200).json({
      success: true,
      message: "Asset deleted successfully from Cloudinary",
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Error deleting file",
    });
  }
});

module.exports = router;
