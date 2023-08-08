import { ColorExtractor } from 'react-color-extractor'

export const ColorsComponent = (uri) => {
  console.log("getcolors");

  state = { colors: [] };

  getColors = (colors) =>
    this.setState((state) => ({ colors: [...state.colors, ...colors] }));

  return <ColorExtractor src={uri} getColors={this.getColors} />;
};
