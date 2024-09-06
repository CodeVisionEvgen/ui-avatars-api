# Ui-Avatars Api

#### ui-avatars is a library for generating avatar images based on initials using the ui-avatars.com API. This package allows you to create URLs for generating avatars and download images directly into a buffer.

### Installation

### To install ui-avatars, use npm:

```bash
npm install ui-avatars
```

### Usage

#### Here’s an example of how to use the ui-avatars library:

```typescript
import { UiAvatars } from "ui-avatars";
import fs from "fs";

const avatarOptions = {
  name: "Jane Doe",
  size: 128,
  background: "ff5733",
  color: "ffffff",
  rounded: true,
};

const avatarGenerator = new UiAvatars(avatarOptions);

avatarGenerator
  .downloadAvatar()
  .then(({ url, image }) => {
    fs.writeFileSync("avatar.png", image);
    console.log("Avatar downloaded from:", url);
  })
  .catch((error) => {
    console.error("Error downloading avatar:", error.message);
  });
```

### API

#### The UiAvatars class provides methods for generating avatar URLs and downloading avatars.

#### Constructor

```typescript
constructor(options?: UiAvatarsSettingsType)

    options: An optional object to configure default avatar settings. See UiAvatarsSettingsType for available options.

Methods
createUrl(options?: UiAvatarsSettingsType): string

Generates a URL for the avatar image with the specified settings.

    options: An optional object to override the default settings.
    Returns: A string URL to request the avatar image.

downloadAvatar(options?: UiAvatarsSettingsType): Promise<{ url: string; image: Buffer }>

Downloads the avatar image and returns the URL and image buffer.

    options: An optional object to override the default settings.
    Returns: A promise that resolves to an object containing:
        url: The URL used to request the avatar image.
        image: The image data as a Buffer.

downloadAvatarByUrl(url: string): Promise<{ url: string; image: Buffer }>

Downloads the avatar image and returns the URL and image buffer.

    url: string;
    Returns: A promise that resolves to an object containing:
        url: The URL used to request the avatar image.
        image: The image data as a Buffer.
```

### Configuration Options

- name: The name used to generate initials.
- background: Hex color for the image background, without the hash (#).
- color: Hex color for the font, without the hash (#).
- size: Avatar image size in pixels. Between 16 and 512.
- fontsize: Font size as a percentage of the size. Between 0.1 and 1.
- length: Length of the generated initials.
- rounded: Boolean specifying if the returned image should be a circle.
- bold: Boolean specifying if the returned letters should use a bold font.
  uppercase: Decide if the API should uppercase the name/initials.
