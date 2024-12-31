#!/bin/bash

# Define source and destination folders
SOURCE_FOLDER="C:/Users/Austin/NubyTech/nubytech/public"
DESTINATION_FOLDER="C:/Users/Austin/NubyTech/nubytech/"

# Prompt the user for the file name
read -p "Enter song name: " FILE_NAME
FILE_NAME="$FILE_NAME.mp4"
# Check if the file exists in the source folder
if [ -e "$SOURCE_FOLDER/$FILE_NAME" ]; then
  # Move the file to the destination folder
  cp "$SOURCE_FOLDER/$FILE_NAME" "$DESTINATION_FOLDER"
  echo "File '$FILE_NAME' has been moved to '$DESTINATION_FOLDER'."
else
  # If the file does not exist, print an error message
  echo "Error: File '$FILE_NAME' does not exist in '$SOURCE_FOLDER'."
fi
