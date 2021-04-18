---
title: "Freewill"

description: "breve descripción del articulo"

categories:
# - ej:salud

tags:
# - ej:perros
# - ej:gatos
# - ej:prevencion
# - etc


date: 2021-02-03T08:41:09-04:00


img: "/images/blog/muro-beach.jpg"
imgSocial: "/images/example.png"
imgAlternativeText: "Texto alternativo para la imagen"

igPost: 

destacado: false

draft: true

---

Atención, atención: Este presente experimento está a punto de explotar. **Se prendió esta mierda**


Que aso el mío. Hoy vamos a hacer un experimento con ilustraciones personalizadas dentro de los blog posts y le meteremos demasiado encanto con algunas animaciones con js

{{< rawhtml >}}

<div id='chart'></div>

<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

<script>
    let options = {
        chart: {
            type: 'line'
        },
        series: [{
            name: 'sales', 
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }],
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    }
    let container = document.querySelector("#chart")
    let chart = new ApexCharts(container, options)
    chart.render()

</script>

{{< /rawhtml >}}