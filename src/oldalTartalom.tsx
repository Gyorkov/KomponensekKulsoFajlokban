function GyumolcsokCim() {
    return <h2>Gyümölcsök</h2>
}
function GyumolcsokLista() {
    return <ul>
        <li>Alma</li>
        <li>Körte</li>
        <li>Meggy</li>
        <li>Narancs</li>
        <li>Sárkánygyümölcs</li>   
    </ul>
}

function ZoldsegekCim() {
    return <h2>Zöldségek</h2>
}

function ZoldsegekTablazat() {
    return <table>
        <tr>
            <th>Sorszám</th>
            <th>Név</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Zeller</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Paprika</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Hagyma</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Répa</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Káposzta</td>
        </tr>
    </table>
}

function Felsorolas() {
    return (
        <div>
        {GyumolcsokCim()}
        <br />
        {GyumolcsokLista()}
        </div>
    )
}

function Tablazat() {
    return (
        <div>
            {ZoldsegekCim()}
            <br />
            {ZoldsegekTablazat()}
        </div>
    )
}

function TobbSzoveg() {
    return (
        <div>
            <p>Ez már nem az első React alkalmazásom.</p>
            <br />
            <p>Még csak egyszerű komponenseket hozok létre és gyakorlok.</p>
            <br />
            <p>Első React alkalmazásom!</p>
        </div>
    )
}

export function OldalTartalom() {
    return (
        <div>
            {Felsorolas()}
            <br />
            {Tablazat()}
            <br />
            {TobbSzoveg()}
        </div>
    )
}