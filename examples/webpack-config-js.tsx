import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Ex extends Vue {
  render() {
    return (
      <pre class="chroma code prettyprint prettyprinted">
        <code class='code-content'>
          <span class="s3e8">var</span><span class="s1f40"> </span><span class="s7df">webpack</span><span class="s1f40"> </span><span class="sfa0">=</span><span class="s1f40"> </span><span class="s7df">require</span><span class="s1388">(</span><span class="sc1c">&#39;webpack&#39;</span><span class="s1388">);</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"\n"}</span><span class="s1f40"></span><span class="s7df">module</span><span class="s1388">.</span><span class="s7df">exports</span><span class="s1f40"> </span><span class="sfa0">=</span><span class="s1f40"> </span><span class="s1388">{"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s7df">devtool</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="sc1c">&#39;source-map&#39;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s7df">entry</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s1388">{"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7df">app</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="sc1c">&#39;./example.ts&#39;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7df">vuevendor</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s1388">[</span><span class="s1f40"> </span><span class="sc1c">&#39;vue&#39;</span><span class="s1388">,</span><span class="s1f40"> </span><span class="sc1c">&#39;vue-property-decorator&#39;</span><span class="s1388">,</span><span class="s1f40"> </span><span class="sc1c">&#39;vue-router&#39;</span><span class="s1388">,</span><span class="s1f40"> </span><span class="sc1c">&#39;vuex&#39;</span><span class="s1f40"> </span><span class="s1388">]</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s1388">{"}"},</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s7df">output</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s1388">{"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7df">path</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s7df">__dirname</span><span class="s1f40"> </span><span class="sfa0">+</span><span class="s1f40"> </span><span class="sc1c">&#39;/dist&#39;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7df">filename</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="sc1c">&#39;[name].js&#39;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s1770">// Needed to build dynamic bundles. Use chunkhash to get file hash value{"\n"}</span><span class="s1770"></span><span class="s1f40">{"    "}</span><span class="s1770">// to prevent e.g. CDN to serve old versions of your bundles.{"\n"}</span><span class="s1770"></span><span class="s1f40">{"    "}</span><span class="s7df">chunkFilename</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="sc1c">&#39;[name].[chunkhash].bundle.js&#39;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s1770">// Used to load [name].[chunkhash].bundle.js from a correct location{"\n"}</span><span class="s1770"></span><span class="s1f40">{"    "}</span><span class="s7df">publicPath</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="sc1c">&#39;/dist/&#39;</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s1388">{"}"},</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s7df">resolve</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s1388">{"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7df">extensions</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s1388">[</span><span class="sc1c">&#39;.ts&#39;</span><span class="s1388">,</span><span class="s1f40"> </span><span class="sc1c">&#39;.js&#39;</span><span class="s1388">,</span><span class="s1f40"> </span><span class="sc1c">&#39;.tsx&#39;</span><span class="s1388">]</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s1388">{"}"},</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s7df">module</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s1388">{"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s7df">rules</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s1388">[</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"      "}</span><span class="s1388">{"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"        "}</span><span class="s7df">test</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="sc1c">/\.css$/</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"        "}</span><span class="s7df">use</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s1388">[</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"          "}</span><span class="sc1c">&#39;style-loader&#39;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"          "}</span><span class="s1388">{"{"}</span><span class="s1f40"> </span><span class="s7df">loader</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="sc1c">&#39;css-loader&#39;</span><span class="s1388">,</span><span class="s1f40"> </span><span class="s7df">options</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s1388">{"{"}</span><span class="s1f40"> </span><span class="s7df">importLoaders</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="sc80">1</span><span class="s1f40"> </span><span class="s1388">{"}"}</span><span class="s1f40"> </span><span class="s1388">{"}"},</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"          "}</span><span class="sc1c">&#39;postcss-loader&#39;</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"        "}</span><span class="s1388">]</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"      "}</span><span class="s1388">{"}"},</span><span class="s1f40">{"      "}{"\n"}</span><span class="s1f40">{"      "}</span><span class="s1388">{"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"        "}</span><span class="s7df">test</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="sc1c">/\.vue$/</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"        "}</span><span class="s7df">loader</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="sc1c">&#39;vue-loader&#39;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"        "}</span><span class="s7df">options</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s1388">{"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"          "}</span><span class="s7df">esModule</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s3e8">true</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"        "}</span><span class="s1388">{"}"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"      "}</span><span class="s1388">{"}"},</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"      "}</span><span class="s1388">{"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"        "}</span><span class="s7df">test</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="sc1c">/\.tsx?$/</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"        "}</span><span class="s7df">exclude</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="sc1c">/node_modules/</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"        "}</span><span class="s7df">use</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s1388">{"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"          "}</span><span class="s7df">loader</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="sc1c">&#39;awesome-typescript-loader&#39;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"          "}</span><span class="s7df">options</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s1388">{"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"            "}</span><span class="s7df">useBabel</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s3e8">true</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"          "}</span><span class="s1388">{"}"},</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"        "}</span><span class="s1388">{"}"},</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"      "}</span><span class="s1388">{"}"},</span><span class="s1f40">{"      "}{"\n"}</span><span class="s1f40">{"    "}</span><span class="s1388">]</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s1388">{"}"},</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"  "}</span><span class="s7df">plugins</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s1388">[</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s1770">// libraries{"\n"}</span><span class="s1770"></span><span class="s1f40">{"    "}</span><span class="s3e8">new</span><span class="s1f40"> </span><span class="s7df">webpack</span><span class="s1388">.</span><span class="s7df">optimize</span><span class="s1388">.</span><span class="s7df">CommonsChunkPlugin</span><span class="s1388">({"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"      "}</span><span class="s7df">name</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="sc1c">&#34;vuevendor&#34;</span><span class="s1388">,</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"      "}</span><span class="s7df">minChunks</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="s3e8">function</span><span class="s1f40"> </span><span class="s1388">(</span><span class="s7df">module</span><span class="s1388">)</span><span class="s1f40"> </span><span class="s1388">{"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"        "}</span><span class="s1770">// this assumes your vendor imports exist in the node_modules directory{"\n"}</span><span class="s1770"></span><span class="s1f40">{"        "}</span><span class="s3e8">return</span><span class="s1f40"> </span><span class="s7df">module</span><span class="s1388">.</span><span class="s7df">context</span><span class="s1f40"> </span><span class="sfa0">&amp;&amp;</span><span class="s1f40"> </span><span class="s7df">module</span><span class="s1388">.</span><span class="s7df">context</span><span class="s1388">.</span><span class="s7df">indexOf</span><span class="s1388">(</span><span class="sc1c">&#34;node_modules&#34;</span><span class="s1388">)</span><span class="s1f40"> </span><span class="sfa0">!==</span><span class="s1f40"> </span><span class="sfa0">-</span><span class="sc80">1</span><span class="s1388">;</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"      "}</span><span class="s1388">{"}"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s1388">{"}"}),</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s1770">// Webpack&#39;s bootstrap and module manifest.{"\n"}</span><span class="s1770"></span><span class="s1f40">{"    "}</span><span class="s1770">// Include logic to load correct versions of dynamic bundles.{"\n"}</span><span class="s1770"></span><span class="s1f40">{"    "}</span><span class="s3e8">new</span><span class="s1f40"> </span><span class="s7df">webpack</span><span class="s1388">.</span><span class="s7df">optimize</span><span class="s1388">.</span><span class="s7df">CommonsChunkPlugin</span><span class="s1388">({"{"}</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"      "}</span><span class="s7df">name</span><span class="sfa0">:</span><span class="s1f40"> </span><span class="sc1c">&#39;manifest&#39;</span><span class="s1f40">{"\n"}</span><span class="s1f40">{"    "}</span><span class="s1388">{"}"})</span><span class="s1f40">{"        "}{"\n"}</span><span class="s1f40">{"  "}</span><span class="s1388">]</span><span class="s1f40">{"\n"}</span><span class="s1f40"></span><span class="s1388">{"}"}</span><span class="s1f40">{"\n"}</span><span class="s1f40"></span>
        </code>
      </pre>
    )
  }
}
