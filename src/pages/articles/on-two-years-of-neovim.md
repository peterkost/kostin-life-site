---
layout: ~/layouts/ArticleLayout.astro
title: "On Two Years of Neovim"
date: "2025-06-28"
week: 3
---

This week, most of my free time has been spent rewriting my Neovim configuration from scratch. The whole process took me eleven hours, but I was able to get my startup time down from 162 to 95 ms. Safe to say my investment will pay off in no time!

When I was done I realized the initial commit in my [Neovim repo](https://github.com/peterkost/nvim-config) was almost exactly two years ago (June 23, 2023). To mark this momentous occasion of using Neovim as my (almost) exclusive editor for two years I thought it would be appropriate to write about my experience with it.

## The Before Times

I vividly remember the first time I heard of Neovim. The TA for one of my computer science labs was going over some demo and I remember him saying something along the lines of "Now you're going to want to bring up Vim, well actually I'm using Neovim". I'm pretty sure I didn't bother with that and just used Mousepad or whatever those ISO's of XFCE that the university made us use came with, so I have no idea why I remember this.

My first job was at Morgan Stanley. They have a massive Scala code base with lots of internal tooling built around IntelliJ. That plus the insane restrictions on the VMs we had to use meant that I had no choice but to use it. But honestly, I had a pretty good experience with it, code completion, finding references, and looking through the code base all worked great.

After that, I went to IBM where I was put on some projects that required me to use Visual Studio. After my experience with it, if I had two offers and one of them required me to use Visual Studio and the other one paid 50% less, I might just take the pay cut. Say what you want about Xcode, but at least it's got that Apple design that makes it pleasant to look at. With Visual Studio, I have nothing nice to say.

## Making The Switch

When I wasn't forced to use some bloated IDE, I would use VS Code. It's basically become the industry standard and I can see why. Free, easy to set up, and has extensions for everything. I haven't become too much of a Neovim elitist to recognize that it's probably the best editor for anyone getting started or who doesn't want to tinker with their editor.

After about a year of the hellscape that was Visual Studio, I got put on a project doing frontend in React. I was happy with the change, but one day I looked in the mirror and realized that I was a React dev using VS Code on his MacBook. Three strikes, way too soy for me. The design of the MacBook is just too good and we were too far into the project for me to push an HTMX rewrite, so VS code was the easy out. Hello Neovim!

I briefly looked at some distros, but all of them felt like they had way too much stuff that I didn't need. If I was going to do this, I had to do it right. Start from scratch, read the docs, and... I ended up just following Primeagen's [0 to LSP](https://youtu.be/w7i4amO_zaE?si=l5eG7pro3igUyj4z) tutorial and copying 90% of it. Copying another man's config is pretty soy, but not nearly as soy as using VS Code. The guide gave me a working config and enough knowledge about Neovim and the ecosystem to get started.

## The Two Years

Vim motions are probably the biggest hurdle to Vim adoption, so I was quite surprised by how much of a nonissue it was for me. I hadn't ever used them before, but I don't remember struggling much with them. I'll admit I'm still pretty bad with them. I haven't spent much time learning best practices, so a lot of my navigation still involves `hjkl`. But even with my lackluster abilities, it's still faster than using a mouse.

The main reason I've stuck with Neovim has been how fun it is to use. I played a lot of DotA 2 in high school and always enjoyed heroes that required micro. That is, controlling multiple units across the map, which requires you to quickly move your camera around. With [Harpoon](https://github.com/ThePrimeagen/harpoon) I'm able to recreate this while coding. Instead of fumbling with tabs, I press `Cntrl + j,k,l,n,m` and jump to whatever files I'm currently working with. Since I can jump between files so quickly I don't need to use multiple tabs or windows. This sounds minor, but the big unlock here is that I can work off the small screen of the MacBook Air without any productivity loss.

Speaking of unlocks, being comfortable with Neovim means that I can edit files on a server without much hassle. I've had some instances where I've had to do some file changes over SSH. Before getting comfortable with Neovim I could do it, but I would be super slow. Now if you give me a server with vanilla Vim I'm pretty comfortable doing whatever I need to.

I have to admit that I do fall back to VS Code for certain tasks. When I was first starting, I had to copy all the text in a file while screen sharing. Simple task, but I just drew a complete blank and ended up switching to VS Code for the remainder of the call. Since then for interviews and any other high-stakes calls I shy away from Neovim. For Git I mostly use the CLI and [Diffview](https://github.com/sindrets/diffview.nvim) to look at changes while I'm working. But if I ever need to commit hunks or resolve merge conflicts I go crawling back to VS Code. The former is a skill issue, but the latter is a big part of why I felt like I had to rewrite my config from scratch, for real this time.

## The Rewrite

As I mentioned previously, my config was 90% copied from a tutorial. Over the two years of using it I had installed some more plugins, but besides that not much changed. That is because I didn't **really** understand how everything was configured. Sure, I figured out how to install [Neoformat](https://github.com/sbdchd/neoformat) and used [Mason](https://github.com/mason-org/mason.nvim) so that it could run [Ruff](https://github.com/astral-sh/ruff) to format my code, but when I wanted to go past the default config, I had no idea what I was doing. When I ran into some issues with my LSP which was setup using [LSP-Zero](https://github.com/VonHeikemen/lsp-zero.nvim) I tried to make some changes to the config, but they seemed to have no effect. This led me to give up on one of the main selling points of Neovim, customization. I had been taking notes on inefficiencies in my workflow, but I wasn't able to address them.

Well, eleven hours later I can say that this is no longer the case. I started with an empty `nvim` folder and ended with a config in which I understood every piece. By reading official docs and looking at some other config repos I was able to rebuild all the functionality of my old config with the latest plugins and 0.11 features. As I was doing this, the thought of giving PyCharm a try did cross my mind a few times, but I'm glad I pushed through. In retrospect, it wasn't that bad. The only thing I got a bit stuck on was trying to switch from [Treesitter](https://github.com/nvim-treesitter/nvim-treesitter)'s `master` to the `main` branch. The latter is a completely new version and it took me way too long to figure out that it just doesn't support some of the features I needed.

## Future

While I've been using Neovim for two years, this feels like a new chapter. I tried to restrict myself to only recreating existing functionality in the interest of time, but I still replaced some plugins and tweaked some configs that I'm looking forward to using. With my newfound understanding of Neovim and Lua, I no longer have to put up with things not being configured how I want or fear that my config will break. I am now confident that I have everything I need to make Neovim work exactly how I want it to.
