var CityGML_Transportation_2_0_Module_Factory = function () {
  var CityGML_Transportation_2_0 = {
    n: 'CityGML_Transportation_2_0',
    dens: 'http:\/\/www.opengis.net\/citygml\/transportation\/2.0',
    dans: 'http:\/\/www.w3.org\/1999\/xlink',
    deps: ['GML_3_1_1', 'XLink_1_0', 'CityGML_2_0'],
    tis: [{
        ln: 'RailwayType',
        bti: '.TransportationComplexType',
        ps: [{
            n: 'genericApplicationPropertyOfRailway',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfRailway',
            ti: 'AnyType'
          }]
      }, {
        ln: 'RoadType',
        bti: '.TransportationComplexType',
        ps: [{
            n: 'genericApplicationPropertyOfRoad',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfRoad',
            ti: 'AnyType'
          }]
      }, {
        ln: 'TrafficAreaType',
        bti: '.AbstractTransportationObjectType',
        ps: [{
            n: 'clazz',
            en: 'class',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'function',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'usage',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'surfaceMaterial',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'lod2MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod3MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod4MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'genericApplicationPropertyOfTrafficArea',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfTrafficArea',
            ti: 'AnyType'
          }]
      }, {
        ln: 'TransportationComplexType',
        bti: '.AbstractTransportationObjectType',
        ps: [{
            n: 'clazz',
            en: 'class',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'function',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'usage',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'trafficArea',
            mno: 0,
            col: true,
            ti: '.TrafficAreaPropertyType'
          }, {
            n: 'auxiliaryTrafficArea',
            mno: 0,
            col: true,
            ti: '.AuxiliaryTrafficAreaPropertyType'
          }, {
            n: 'lod0Network',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.GeometricComplexPropertyType'
          }, {
            n: 'lod1MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod2MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod3MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod4MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'genericApplicationPropertyOfTransportationComplex',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfTransportationComplex',
            ti: 'AnyType'
          }]
      }, {
        ln: 'AbstractTransportationObjectType',
        bti: 'CityGML_2_0.AbstractCityObjectType',
        ps: [{
            n: 'genericApplicationPropertyOfTransportationObject',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfTransportationObject',
            ti: 'AnyType'
          }]
      }, {
        ln: 'SquareType',
        bti: '.TransportationComplexType',
        ps: [{
            n: 'genericApplicationPropertyOfSquare',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfSquare',
            ti: 'AnyType'
          }]
      }, {
        ln: 'TrackType',
        bti: '.TransportationComplexType',
        ps: [{
            n: 'genericApplicationPropertyOfTrack',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfTrack',
            ti: 'AnyType'
          }]
      }, {
        ln: 'AuxiliaryTrafficAreaPropertyType',
        ps: [{
            n: 'auxiliaryTrafficArea',
            rq: true,
            en: 'AuxiliaryTrafficArea',
            ti: '.AuxiliaryTrafficAreaType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'TrafficAreaPropertyType',
        ps: [{
            n: 'trafficArea',
            rq: true,
            en: 'TrafficArea',
            ti: '.TrafficAreaType'
          }, {
            n: 'remoteSchema',
            an: {
              lp: 'remoteSchema',
              ns: 'http:\/\/www.opengis.net\/gml'
            },
            t: 'a'
          }, {
            n: 'type',
            ti: 'XLink_1_0.TypeType',
            t: 'a'
          }, {
            n: 'href',
            t: 'a'
          }, {
            n: 'role',
            t: 'a'
          }, {
            n: 'arcrole',
            t: 'a'
          }, {
            n: 'title',
            t: 'a'
          }, {
            n: 'show',
            ti: 'XLink_1_0.ShowType',
            t: 'a'
          }, {
            n: 'actuate',
            ti: 'XLink_1_0.ActuateType',
            t: 'a'
          }]
      }, {
        ln: 'AuxiliaryTrafficAreaType',
        bti: '.AbstractTransportationObjectType',
        ps: [{
            n: 'clazz',
            en: 'class',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'function',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'usage',
            mno: 0,
            col: true,
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'surfaceMaterial',
            ti: 'GML_3_1_1.CodeType'
          }, {
            n: 'lod2MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod3MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod4MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'genericApplicationPropertyOfAuxiliaryTrafficArea',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfAuxiliaryTrafficArea',
            ti: 'AnyType'
          }]
      }],
    eis: [{
        en: '_GenericApplicationPropertyOfRoad',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfTransportationComplex',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfTrack',
        ti: 'AnyType'
      }, {
        en: 'Track',
        ti: '.TrackType',
        sh: 'TransportationComplex'
      }, {
        en: 'AuxiliaryTrafficArea',
        ti: '.AuxiliaryTrafficAreaType',
        sh: '_TransportationObject'
      }, {
        en: '_GenericApplicationPropertyOfSquare',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfTrafficArea',
        ti: 'AnyType'
      }, {
        en: 'Square',
        ti: '.SquareType',
        sh: 'TransportationComplex'
      }, {
        en: 'Road',
        ti: '.RoadType',
        sh: 'TransportationComplex'
      }, {
        en: '_TransportationObject',
        ti: '.AbstractTransportationObjectType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/2.0'
        }
      }, {
        en: '_GenericApplicationPropertyOfRailway',
        ti: 'AnyType'
      }, {
        en: 'TrafficArea',
        ti: '.TrafficAreaType',
        sh: '_TransportationObject'
      }, {
        en: 'TransportationComplex',
        ti: '.TransportationComplexType',
        sh: '_TransportationObject'
      }, {
        en: 'Railway',
        ti: '.RailwayType',
        sh: 'TransportationComplex'
      }, {
        en: '_GenericApplicationPropertyOfAuxiliaryTrafficArea',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfTransportationObject',
        ti: 'AnyType'
      }]
  };
  return {
    CityGML_Transportation_2_0: CityGML_Transportation_2_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], CityGML_Transportation_2_0_Module_Factory);
}
else {
  var CityGML_Transportation_2_0_Module = CityGML_Transportation_2_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.CityGML_Transportation_2_0 = CityGML_Transportation_2_0_Module.CityGML_Transportation_2_0;
  }
  else {
    var CityGML_Transportation_2_0 = CityGML_Transportation_2_0_Module.CityGML_Transportation_2_0;
  }
}