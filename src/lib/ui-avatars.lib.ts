import axios from "axios";
import {
  ResponseAvatarType,
  UIAvatarSettings,
  UiAvatarsSettingsType,
} from "../types/type";

export class UiAvatars extends UIAvatarSettings {
  /**
   * @param options default options for all avatars
   */
  constructor(options?: UiAvatarsSettingsType) {
    super();
    this.setOptions(options);
  }

  private setOptions(options: UiAvatarsSettingsType = {}) {
    this.defaultOptions = {
      name: options.name,
      background: options.background,
      color: options.color,
      size: options.size,
      fontsize: options.fontsize,
      length: options.length,
      rounded: options.rounded,
      bold: options.bold,
      uppercase: options.uppercase,
    };
  }
  createUrl(options?: UiAvatarsSettingsType) {
    let url = "https://ui-avatars.com/api?";

    const settings = { ...this.defaultOptions, ...options };

    Object.entries(settings).forEach((option) => {
      if (option[1]) url += `${option[0]}=${option[1]}&`;
    });

    return url.slice(0, -1);
  }
  async downloadByUrl(url: string): Promise<ResponseAvatarType> {
    try {
      const response = await axios.get(url, {
        responseType: "arraybuffer",
      });
      return { url, image: response.data };
    } catch (error) {
      throw new Error(`Failed to download avatar: ${error.message}`);
    }
  }
  async downloadAvatar(
    options?: UiAvatarsSettingsType
  ): Promise<ResponseAvatarType> {
    const url = this.createUrl(options);
    try {
      const response = await axios.get(url, {
        responseType: "arraybuffer",
      });
      return { url, image: response.data };
    } catch (error) {
      throw new Error(`Failed to download avatar: ${error.message}`);
    }
  }
}
