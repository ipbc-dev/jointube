#!/bin/bash
for i in po/*.po
do
    j=$(echo $i | cut -d '.' -f 1,2 | cut -d '/' -f 2 | sed -e "s/_/-/g")
    k=$(echo $i | cut -d '.' -f 1   | cut -d '/' -f 2)
    l=$(echo $i | cut -d '.' -f 2   | cut -d '/' -f 2 | sed -e "s/_/-/g")
    j=${j,,}
    l=${l,,}
    if [ "$k" == 'config' ]
    then
        po2txt -i $i --progress none -o po/$l.toml
    else
        po2txt -i $i --progress none -t content/$k.en.md -o po/$j.md
    fi
done
mv po/*.md content/
mv po/*.toml config/
