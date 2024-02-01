const filePath = 'carte_coree.json';

fetch(filePath)
    .then(response => response.json())
    .then(jsonData => {
        console.log(jsonData);
        const svgWidth = 500;
        const svgHeight = 500;
        const margin = 50;
        const divText = d3.select('body').append('div');
        const svg = d3.select("body").append("svg");
        svg.attr('width', svgWidth)
        .attr('height', svgHeight);
        d3
        const geoJson = topojson.feature(jsonData,jsonData.objects.skorea_provinces_2018_geo);
        const geoMercator = d3.geoMercator()
        .center([128,36])
        .fitSize([svgWidth - margin, svgHeight - margin], geoJson);
        const path = d3.geoPath(geoMercator);

        const mouseHover = d => {
        svg.selectAll('path')
            .filter(td => td.properties.name === d.properties.name)
            .attr('fill', 'red');
        divText.text(d.properties.name_eng);
        }
        const mouseLeave = d => {
        svg.selectAll('path')
            .filter(td => td.properties.name === d.properties.name)
            .attr('fill', 'gray');
        divText.text('Gwangju');
        }

        svg.append('g')
        .attr('transform', `translate(${margin},${margin})`)
        .selectAll("path")
        .data(geoJson.features)
        .enter().append("path")
        .attr("d", path)
        .on('mouseenter', mouseHover)
        .on('mouseleave', mouseLeave);
        svg.selectAll('path').each(d => console.log(d));
            })
            
            // Catching API errors
    .catch(error => {
        console.error('Error loading the file:', error);
    });
