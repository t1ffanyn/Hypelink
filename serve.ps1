<#
Serve the current directory on http://localhost:3000 using Python 3's http.server.
Usage: .\serve.ps1
#>
try {
    $python = Get-Command python -ErrorAction SilentlyContinue
    if (-not $python) { $python = Get-Command python3 -ErrorAction SilentlyContinue }
    if ($python) {
        Write-Host "Starting Python HTTP server on http://localhost:3000"
        & $python.Source -m http.server 3000
    }
    else {
        Write-Host "Python not found. You can serve this folder with any static server (Node http-server) or open index.html directly."
    }
}
catch {
    Write-Error $_.Exception.Message
}
