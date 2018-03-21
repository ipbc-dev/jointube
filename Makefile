all: hugo

locales:
	txt2po --progress=none -P -i content/home.fr.md -o pot/home.pot
	txt2po --progress=none -P -i content/faq.fr.md -o pot/faq.pot
	txt2po --progress=none -P -i config/en.toml -o pot/config.pot

push-locales: locales
	zanata-cli -q -B push

pull-locales:
	zanata-cli -q -B pull
	./.po2txt.sh

stats-locales:
	zanata-cli -q stats

hugo:
	hugo --config=config.toml,`ls config/*toml | paste -sd "," -`

serve:
	hugo serve --config=config.toml,`ls config/*toml | paste -sd "," -`
