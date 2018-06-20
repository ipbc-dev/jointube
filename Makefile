all: hugo

locales:
	txt2po --progress=none --duplicates=merge -P -i content/home.en.md -o pot/home.pot
	txt2po --progress=none --duplicates=merge -P -i content/faq.en.md -o pot/faq.pot
	txt2po --progress=none --duplicates=merge -P -i content/hall-of-fame.en.md -o pot/hall-of-fame.pot
	txt2po --progress=none --duplicates=merge -P -i config/en.toml -o pot/config.pot

push-locales: locales
	zanata-cli -q -B push

pull-locales:
	zanata-cli -q -B pull --min-doc-percent 75
	./.po2txt.sh

clean-locales:
	rm po/*

stats-locales:
	zanata-cli -q stats

hugo:
	hugo --config=config.toml,`ls config/*toml | paste -sd "," -`

serve:
	hugo serve --config=config.toml,`ls config/*toml | paste -sd "," -`
