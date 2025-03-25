export default function Toolbar({
    filters,
    selected,
    onSelectFilter
  }) {
   return (
    <div class='filters'>
      <div class='filter' onClick={evt => onSelectFilter(evt.currentTarget.textContent)}>
         {filters[0]}
      </div>
      <div class='filter' onClick={evt => onSelectFilter(evt.currentTarget.textContent)}>
         {filters[1]}
      </div>
      <div class='filter' onClick={evt => onSelectFilter(evt.currentTarget.textContent)}>
         {filters[2]}
      </div>
      <div class='filter' onClick={evt => onSelectFilter(evt.currentTarget.textContent)}>
         {filters[3]}
      </div>
    </div>
   )
 }