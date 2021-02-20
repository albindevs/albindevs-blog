---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
description: "breve descripcion del articulo"
tags:
# - ej:perros
# - ej:gatos
# - ej:prevencion
# - etc

img: "/images/example.svg"
imgSocial: "/images/example.png"
imgAlternativeText: "Texto alternativo para la imagen"
draft: false
date: {{ .Date }}
# update: 2021-01-01T17:00:00-04:00
---
Water that seed