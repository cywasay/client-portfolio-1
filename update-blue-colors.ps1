# Blue Color Replacement Script
# This script replaces all blue gradient headings and interactive blue elements with blue-950

$files = @(
    "src\app\about\page.jsx",
    "src\app\achievements\page.jsx",
    "src\app\contact\page.jsx",
    "src\app\gallery\page.jsx",
    "src\app\journey\career\page.jsx",
    "src\app\leadership-and-values\page.jsx"
)

foreach ($file in $files) {
    Write-Host "Processing: $file"
    
    $content = Get-Content $file -Raw
    
    # Replace gradient headings with solid blue-950
    $content = $content -replace 'bg-gradient-to-r from-blue-600 via-emerald-600 to-purple-600 bg-clip-text text-transparent', 'text-blue-950'
    $content = $content -replace 'bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent', 'text-blue-950'
    $content = $content -replace 'bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent', 'text-blue-950'
    $content = $content -replace 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent', 'text-blue-950'
    
    # Replace blue text elements
    $content = $content -replace 'text-blue-600', 'text-blue-950'
    $content = $content -replace 'text-blue-500', 'text-blue-950'
    
    # Replace hover states
    $content = $content -replace 'hover:text-blue-600', 'hover:text-blue-950'
    $content = $content -replace 'hover:text-blue-500', 'hover:text-blue-950'
    
    # Replace borders
    $content = $content -replace 'border-blue-600', 'border-blue-950'
    $content = $content -replace 'border-blue-500', 'border-blue-950'
    
    # Replace button colors
    $content = $content -replace 'hover:bg-blue-500', 'hover:bg-blue-950'
    
    # Replace focus states
    $content = $content -replace 'focus-within:text-blue-600', 'focus-within:text-blue-950'
    
    Set-Content $file $content -NoNewline
    Write-Host "Updated: $file"
}

Write-Host ""
Write-Host "All files updated successfully!"
