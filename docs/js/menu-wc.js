'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">corona-statistics documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-dbb7fd4eaba67cbc5c0d8702425d1268"' : 'data-target="#xs-components-links-module-AppModule-dbb7fd4eaba67cbc5c0d8702425d1268"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-dbb7fd4eaba67cbc5c0d8702425d1268"' :
                                            'id="xs-components-links-module-AppModule-dbb7fd4eaba67cbc5c0d8702425d1268"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-3b708053de6a66f89a027764da61e342"' : 'data-target="#xs-components-links-module-CoreModule-3b708053de6a66f89a027764da61e342"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-3b708053de6a66f89a027764da61e342"' :
                                            'id="xs-components-links-module-CoreModule-3b708053de6a66f89a027764da61e342"' }>
                                            <li class="link">
                                                <a href="components/BreadcrumbComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BreadcrumbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CoreComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CoreComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GermanyOverviewModule.html" data-type="entity-link">GermanyOverviewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GermanyOverviewModule-a48076175bb8d1511747891f8d5867bc"' : 'data-target="#xs-components-links-module-GermanyOverviewModule-a48076175bb8d1511747891f8d5867bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GermanyOverviewModule-a48076175bb8d1511747891f8d5867bc"' :
                                            'id="xs-components-links-module-GermanyOverviewModule-a48076175bb8d1511747891f8d5867bc"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GermanyMapComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GermanyMapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GermanyOverviewComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GermanyOverviewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LineChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LineChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TimeframeSelectorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TimeframeSelectorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GermanyOverviewModule-a48076175bb8d1511747891f8d5867bc"' : 'data-target="#xs-injectables-links-module-GermanyOverviewModule-a48076175bb8d1511747891f8d5867bc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GermanyOverviewModule-a48076175bb8d1511747891f8d5867bc"' :
                                        'id="xs-injectables-links-module-GermanyOverviewModule-a48076175bb8d1511747891f8d5867bc"' }>
                                        <li class="link">
                                            <a href="injectables/GermanyService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GermanyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResponsiveWidthModule.html" data-type="entity-link">ResponsiveWidthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-ResponsiveWidthModule-d883d56dd5a0903aee66cb5bda0cb493"' : 'data-target="#xs-directives-links-module-ResponsiveWidthModule-d883d56dd5a0903aee66cb5bda0cb493"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-ResponsiveWidthModule-d883d56dd5a0903aee66cb5bda0cb493"' :
                                        'id="xs-directives-links-module-ResponsiveWidthModule-d883d56dd5a0903aee66cb5bda0cb493"' }>
                                        <li class="link">
                                            <a href="directives/ResponsiveWidthDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResponsiveWidthDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AlertComponent.html" data-type="entity-link">AlertComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BreadcrumbComponent.html" data-type="entity-link">BreadcrumbComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GermanyMapComponent.html" data-type="entity-link">GermanyMapComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LineChartComponent.html" data-type="entity-link">LineChartComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TimeframeSelectorComponent.html" data-type="entity-link">TimeframeSelectorComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppError.html" data-type="entity-link">AppError</a>
                            </li>
                            <li class="link">
                                <a href="classes/LineChart.html" data-type="entity-link">LineChart</a>
                            </li>
                            <li class="link">
                                <a href="classes/Timeseries.html" data-type="entity-link">Timeseries</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimeseriesState.html" data-type="entity-link">TimeseriesState</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link">AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GermanyService.html" data-type="entity-link">GermanyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GlobalErrorHandler.html" data-type="entity-link">GlobalErrorHandler</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ServerErrorInterceptor.html" data-type="entity-link">ServerErrorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Alert.html" data-type="entity-link">Alert</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Attribute.html" data-type="entity-link">Attribute</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BreakpointItem.html" data-type="entity-link">BreakpointItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomAppError.html" data-type="entity-link">CustomAppError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data.html" data-type="entity-link">Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Error.html" data-type="entity-link">Error</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Feature.html" data-type="entity-link">Feature</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Field.html" data-type="entity-link">Field</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LineChartSeries.html" data-type="entity-link">LineChartSeries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/QueryResponse.html" data-type="entity-link">QueryResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Serie.html" data-type="entity-link">Serie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/State.html" data-type="entity-link">State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Timeframe.html" data-type="entity-link">Timeframe</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TimeseriesData.html" data-type="entity-link">TimeseriesData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UniqueIdField.html" data-type="entity-link">UniqueIdField</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});