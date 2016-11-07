function mapPrep(location, id, query)
{
    location = location.replace(" ","+")
    var root = 'https://www.google.com/maps/embed/v1/search?key=AIzaSyDko3US7QPjYurzRs1V7rtB344Fc9G25Ck&q=';
    document.getElementById(id).src = root.concat(query, "+near+", location);
}
