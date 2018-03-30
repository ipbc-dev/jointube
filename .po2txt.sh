#!/bin/bash
for i in po/*.po
do
    j=$(echo $i | cut -d '.' -f 1,2 | cut -d '/' -f 2)
    k=$(echo $i | cut -d '.' -f 1   | cut -d '/' -f 2)
    l=$(echo $i | cut -d '.' -f 2   | cut -d '/' -f 2)
    if [ "$k" == 'config' ]
    then
        po2txt -i $i --progress none -o po/$l.toml
    else
        po2txt -i $i --progress none -t content/$k.fr.md -o po/$j.md
    fi
done
mv po/*.md content/
mv po/*.toml config/
