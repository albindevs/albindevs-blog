---
title: "{{ replace .TranslationBaseName "-" " " | title }}"

description: "breve descripcion del articulo"

categories:
# - ej:salud

tags:
# - ej:perros
# - ej:gatos
# - ej:prevencion
# - etc


date: {{ .Date }}


img: "/images/example.jpg"
imgAlternativeText: "Texto alternativo para la imagen"

destacado: false

draft: false

---

texto del articulo