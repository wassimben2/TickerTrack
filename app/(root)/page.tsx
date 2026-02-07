import TradingViewWidget from "@/components/Trading-view-widget";
import { HEATMAP_WIDGET_CONFIG, MARKET_DATA_WIDGET_CONFIG, MARKET_OVERVIEW_WIDGET_CONFIG, TOP_STORIES_WIDGET_CONFIG } from "@/lib/constants";

  export default function Homepage(){
    const scriptUrl = "https://s3.tradingview.com/external-embedding/embed-";
  return (
    <div className="flex min-h-screen  text-gray-400 flex-col gap-4 md:gap-10  items-center sm:items-start">
     <section className="grid w-full gap-8 w-full gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
<div className="md:col-span-1 xl:col-span-1">
<TradingViewWidget
    title="Market Overview"
    scriptUrl= {`${scriptUrl}widget-market-overview.js`}
    config={MARKET_OVERVIEW_WIDGET_CONFIG}
    height={300}
    
/>
</div>
<div className="md:col-span-1 xl:col-span-2">
  <TradingViewWidget
    title="Stock Heat Map"
    scriptUrl={`${scriptUrl}widget-stock-heatmap.js`}
    config={HEATMAP_WIDGET_CONFIG}
    height={300}
    
/>
</div>
     </section>
     <section className="grid w-full gap-8 w-full gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
<div className="h-full md:col-span-1 xl:col-span-1">
<TradingViewWidget
    title="Market Overview"
    scriptUrl= {`${scriptUrl}widget-timeline.js`}
    config={TOP_STORIES_WIDGET_CONFIG}
    height={300}
    
/>
</div>
<div className="h-full md:col-span-1 xl:col-span-2">
  <TradingViewWidget
    title="Stock Heat Map"
    scriptUrl={`${scriptUrl}widget-market-quotes.js`}
    config={MARKET_DATA_WIDGET_CONFIG}
    height={300}
    
/>
</div>
     </section>
    </div>
    
  )
}