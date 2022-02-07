//import '~/main/src/style.scss';
import { Button } from '~/buttons/index.js';

export const storyButton = () => Button;

export const storyButtonDisabled = () => ({
  Component: Button,
  props: {
    disabled: true,
  },
});
