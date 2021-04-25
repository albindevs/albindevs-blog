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


img: ""
imgSocial: "/images/example.png"
imgAlternativeText: ""

igPost: 

destacado: false

draft: true

---


<!-- {{< rawhtml >}}
    img: "/images/blog/muro-beach.jpg"
    
<div id='chart'></div>

<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

{{ partial "laptop-illustration.html" . }}

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

{{< /rawhtml >}} -->


{{< rawhtml >}}

<div id="scroll-container">
    <p>Out of view</p>
</div>

<style>
    #scroll-container {
        margin-top: 300px;
        position: relative;
        height: 100vw;
        max-height: 700px;
        width: 100vw;
        max-width: 700px;
        background-color: hsl(180, 90%, 50%);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #scroll-container p {
        color: #fff;
    }

</style>

<script>
    let scrollContainer = document.querySelector('#scroll-container')
    window.addEventListener('scroll', (e)=> {
        
        if (isInViewport(scrollContainer)) {
            let rect = scrollContainer.getBoundingClientRect()
            let rectTop = rect.top
            let rectBottom = rect.bottom
            console.log("Top: ", rectTop)
            console.log("Bottom: ", rectBottom)
            scrollContainer.style.background = 'hsl(150, 90%, 35%)'
            scrollContainer.innerHTML = '<p>Inside the view</p>'
        } else {
            scrollContainer.innerHTML = '<p>Out of view</p>'
            scrollContainer.style.background = 'hsl(0, 90%, 35%)'
        }
    })
</script>


{{< /rawhtml >}}
