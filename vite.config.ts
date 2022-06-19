import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import UnoCss from 'unocss/vite'
import { presetUno, presetAttributify , presetIcons} from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components(),
    AutoImport({
      imports: ["vue"],
    }),
    UnoCss({
      presets:[
        presetUno(),
        presetAttributify(),
        presetIcons( )
      ]
    })
  ],
});
