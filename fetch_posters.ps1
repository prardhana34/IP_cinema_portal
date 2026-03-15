$movies = @{
    "1" = "rrr"
    "2" = "baahubali"
    "3" = "kgf 2"
    "4" = "3 idiots"
    "5" = "dangal"
    "6" = "aarya"
    "7" = "ala vaikuntapuram"
    "8" = "arjun reddy"
    "9" = "dear comrade"
    "10" = "pushpa the rise"
    "11" = "sarkaru vaari paata"
    "12" = "salaam venky"
}

$scriptPath = "c:\Users\prard\24EG105K34\projects\cinema\js\script.js"
$scriptContent = Get-Content $scriptPath -Raw

foreach ($key in $movies.Keys) {
    try {
        $query = $movies[$key] -replace ' ', '_'
        $query = [uri]::EscapeDataString($query.ToLower())
        $url = "https://v2.sg.media-imdb.com/suggests/$($query[0])/$query.json"
        
        $response = Invoke-WebRequest -Uri $url -UseBasicParsing
        $jsonp = $response.Content
        
        # Extract the first image URL from JSONP
        if ($jsonp -match '"i":\["(https://m\.media-amazon\.com/images/M/[^"]+)"') {
            $imageUrl = $matches[1]
            Write-Host "Found image for movie $key : $imageUrl"
            
            # Replace in script.js using regex
            # Find: { id: 1, ... poster: '...'}
            $pattern = "(?s)({ id: $key,.*?)poster: '[^']+'"
            $replacement = "`$1poster: '$imageUrl'"
            $scriptContent = $scriptContent -replace $pattern, $replacement
        } else {
            Write-Host "No image found for movie $key"
        }
    } catch {
        Write-Host "Error for movie $key : $_"
    }
}

$scriptContent = $scriptContent -replace 'app_version_106', 'app_version_107'
$scriptContent = $scriptContent -replace 'app_version_105', 'app_version_107'

Set-Content $scriptPath $scriptContent
Write-Host "Done patching script.js"
