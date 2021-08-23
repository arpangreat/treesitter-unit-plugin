# treesitter-unit-plugin

My First Neovim Plugin { Working } for selecting, deleting and changing a node.

## Installation

Requirements: [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) including a parser for your language

For [vim-plug](https://github.com/junegunn/vim-plug):
```
Plug 'arpangreat/treesitter-unit-plugin'
```
For [packer](https://github.com/wbthomason/packer.nvim):
```
use 'arpangreat/treesitter-unit-plugin'
```

## Keymaps

For `init.lua`
```lua
vim.api.nvim_set_keymap('n', '<Leader>tus', ':lua require("treesitter-unit-plugin").select()<CR>', { noremap = true, silent = false, expr = false })
vim.api.nvim_set_keymap('n', '<Leader>tud', ':lua require("treesitter-unit-plugin").delete()<CR>', { noremap = true, silent = false, expr = false })
vim.api.nvim_set_keymap('n', '<Leader>tuc', ':lua require("treesitter-unit-plugin").change()<CR>', { noremap = true, silent = false, expr = false })
vim.api.nvim_set_keymap('o', '<Leader>tuy', ':<C-u>lua require("treesitter-unit-plugin").select(true)<CR>:y<CR>', { noremap = true, silent = false, expr = false })
```

# The Great Tutorial is made by [David, DevOnDuty](https://youtu.be/dPQfsASHNkg)
