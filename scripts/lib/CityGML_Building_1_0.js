var CityGML_Building_1_0_Module_Factory = function () {
  var CityGML_Building_1_0 = {
    n: 'CityGML_Building_1_0',
    dens: 'http:\/\/www.opengis.net\/citygml\/building\/1.0',
    deps: ['GML_3_1_1', 'CityGML_1_0'],
    tis: [{
        ln: 'BuildingInstallationType',
        bti: 'CityGML_1_0.AbstractCityObjectType',
        ps: [{
            n: 'clazz',
            en: 'class'
          }, {
            n: 'function',
            mno: 0,
            col: true
          }, {
            n: 'usage',
            mno: 0,
            col: true
          }, {
            n: 'lod2Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod3Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod4Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'genericApplicationPropertyOfBuildingInstallation',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBuildingInstallation',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BuildingInstallationPropertyType',
        bti: 'GML_3_1_1.AssociationType'
      }, {
        ln: 'BuildingFurnitureType',
        bti: 'CityGML_1_0.AbstractCityObjectType',
        ps: [{
            n: 'clazz',
            en: 'class'
          }, {
            n: 'function',
            mno: 0,
            col: true
          }, {
            n: 'usage',
            mno: 0,
            col: true
          }, {
            n: 'lod4Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'lod4ImplicitRepresentation',
            ti: 'CityGML_1_0.ImplicitRepresentationPropertyType'
          }, {
            n: 'genericApplicationPropertyOfBuildingFurniture',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBuildingFurniture',
            ti: 'AnyType'
          }]
      }, {
        ln: 'RoofSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfRoofSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfRoofSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BoundarySurfacePropertyType',
        bti: 'GML_3_1_1.AssociationType'
      }, {
        ln: 'FloorSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfFloorSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfFloorSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'OpeningPropertyType',
        bti: 'GML_3_1_1.AssociationType'
      }, {
        ln: 'DoorType',
        bti: '.AbstractOpeningType',
        ps: [{
            n: 'address',
            mno: 0,
            col: true,
            ti: 'CityGML_1_0.AddressPropertyType'
          }, {
            n: 'genericApplicationPropertyOfDoor',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfDoor',
            ti: 'AnyType'
          }]
      }, {
        ln: 'InteriorFurniturePropertyType',
        bti: 'GML_3_1_1.AssociationType'
      }, {
        ln: 'AbstractBuildingType',
        bti: 'CityGML_1_0.AbstractSiteType',
        ps: [{
            n: 'clazz',
            en: 'class'
          }, {
            n: 'function',
            mno: 0,
            col: true
          }, {
            n: 'usage',
            mno: 0,
            col: true
          }, {
            n: 'yearOfConstruction',
            ti: 'Calendar'
          }, {
            n: 'yearOfDemolition',
            ti: 'Calendar'
          }, {
            n: 'roofType'
          }, {
            n: 'measuredHeight',
            ti: 'GML_3_1_1.LengthType'
          }, {
            n: 'storeysAboveGround',
            ti: 'Integer'
          }, {
            n: 'storeysBelowGround',
            ti: 'Integer'
          }, {
            n: 'storeyHeightsAboveGround',
            ti: 'GML_3_1_1.MeasureOrNullListType'
          }, {
            n: 'storeyHeightsBelowGround',
            ti: 'GML_3_1_1.MeasureOrNullListType'
          }, {
            n: 'lod1Solid',
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'lod1MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod1TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod2Solid',
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'lod2MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod2MultiCurve',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod2TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'outerBuildingInstallation',
            mno: 0,
            col: true,
            ti: '.BuildingInstallationPropertyType'
          }, {
            n: 'interiorBuildingInstallation',
            mno: 0,
            col: true,
            ti: '.IntBuildingInstallationPropertyType'
          }, {
            n: 'cityObjectBoundedBy',
            mno: 0,
            col: true,
            en: 'boundedBy',
            ti: '.BoundarySurfacePropertyType'
          }, {
            n: 'lod3Solid',
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'lod3MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod3MultiCurve',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod3TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod4Solid',
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'lod4MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod4MultiCurve',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'lod4TerrainIntersection',
            ti: 'GML_3_1_1.MultiCurvePropertyType'
          }, {
            n: 'interiorRoom',
            mno: 0,
            col: true,
            ti: '.InteriorRoomPropertyType'
          }, {
            n: 'consistsOfBuildingPart',
            mno: 0,
            col: true,
            ti: '.BuildingPartPropertyType'
          }, {
            n: 'address',
            mno: 0,
            col: true,
            ti: 'CityGML_1_0.AddressPropertyType'
          }, {
            n: 'genericApplicationPropertyOfAbstractBuilding',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfAbstractBuilding',
            ti: 'AnyType'
          }]
      }, {
        ln: 'ClosureSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfClosureSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfClosureSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'WallSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfWallSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfWallSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'AbstractBoundarySurfaceType',
        bti: 'CityGML_1_0.AbstractCityObjectType',
        ps: [{
            n: 'lod2MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod3MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod4MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'opening',
            mno: 0,
            col: true,
            ti: '.OpeningPropertyType'
          }, {
            n: 'genericApplicationPropertyOfBoundarySurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBoundarySurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BuildingPartType',
        bti: '.AbstractBuildingType',
        ps: [{
            n: 'genericApplicationPropertyOfBuildingPart',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBuildingPart',
            ti: 'AnyType'
          }]
      }, {
        ln: 'RoomType',
        bti: 'CityGML_1_0.AbstractCityObjectType',
        ps: [{
            n: 'clazz',
            en: 'class'
          }, {
            n: 'function',
            mno: 0,
            col: true
          }, {
            n: 'usage',
            mno: 0,
            col: true
          }, {
            n: 'lod4Solid',
            ti: 'GML_3_1_1.SolidPropertyType'
          }, {
            n: 'lod4MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'cityObjectBoundedBy',
            mno: 0,
            col: true,
            en: 'boundedBy',
            ti: '.BoundarySurfacePropertyType'
          }, {
            n: 'interiorFurniture',
            mno: 0,
            col: true,
            ti: '.InteriorFurniturePropertyType'
          }, {
            n: 'roomInstallation',
            mno: 0,
            col: true,
            ti: '.IntBuildingInstallationPropertyType'
          }, {
            n: 'genericApplicationPropertyOfRoom',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfRoom',
            ti: 'AnyType'
          }]
      }, {
        ln: 'AbstractOpeningType',
        bti: 'CityGML_1_0.AbstractCityObjectType',
        ps: [{
            n: 'lod3MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'lod4MultiSurface',
            ti: 'GML_3_1_1.MultiSurfacePropertyType'
          }, {
            n: 'genericApplicationPropertyOfOpening',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfOpening',
            ti: 'AnyType'
          }]
      }, {
        ln: 'CeilingSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfCeilingSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfCeilingSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'InteriorRoomPropertyType',
        bti: 'GML_3_1_1.AssociationType'
      }, {
        ln: 'IntBuildingInstallationPropertyType',
        bti: 'GML_3_1_1.AssociationType'
      }, {
        ln: 'WindowType',
        bti: '.AbstractOpeningType',
        ps: [{
            n: 'genericApplicationPropertyOfWindow',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfWindow',
            ti: 'AnyType'
          }]
      }, {
        ln: 'GroundSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfGroundSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfGroundSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BuildingPartPropertyType',
        bti: 'GML_3_1_1.AssociationType'
      }, {
        ln: 'InteriorWallSurfaceType',
        bti: '.AbstractBoundarySurfaceType',
        ps: [{
            n: 'genericApplicationPropertyOfInteriorWallSurface',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfInteriorWallSurface',
            ti: 'AnyType'
          }]
      }, {
        ln: 'BuildingType',
        bti: '.AbstractBuildingType',
        ps: [{
            n: 'genericApplicationPropertyOfBuilding',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfBuilding',
            ti: 'AnyType'
          }]
      }, {
        ln: 'IntBuildingInstallationType',
        bti: 'CityGML_1_0.AbstractCityObjectType',
        ps: [{
            n: 'clazz',
            en: 'class'
          }, {
            n: 'function',
            mno: 0,
            col: true
          }, {
            n: 'usage',
            mno: 0,
            col: true
          }, {
            n: 'lod4Geometry',
            ti: 'GML_3_1_1.GeometryPropertyType'
          }, {
            n: 'genericApplicationPropertyOfIntBuildingInstallation',
            mno: 0,
            col: true,
            en: '_GenericApplicationPropertyOfIntBuildingInstallation',
            ti: 'AnyType'
          }]
      }],
    eis: [{
        en: '_AbstractBuilding',
        ti: '.AbstractBuildingType',
        sh: {
          lp: '_Site',
          ns: 'http:\/\/www.opengis.net\/citygml\/1.0'
        }
      }, {
        en: 'Door',
        ti: '.DoorType',
        sh: '_Opening'
      }, {
        en: '_GenericApplicationPropertyOfCeilingSurface',
        ti: 'AnyType'
      }, {
        en: 'IntBuildingInstallation',
        ti: '.IntBuildingInstallationType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/1.0'
        }
      }, {
        en: 'ClosureSurface',
        ti: '.ClosureSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: '_GenericApplicationPropertyOfRoom',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfBuildingFurniture',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfBuildingInstallation',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfBoundarySurface',
        ti: 'AnyType'
      }, {
        en: 'FloorSurface',
        ti: '.FloorSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: '_GenericApplicationPropertyOfInteriorWallSurface',
        ti: 'AnyType'
      }, {
        en: 'InteriorWallSurface',
        ti: '.InteriorWallSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: 'WallSurface',
        ti: '.WallSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: 'CeilingSurface',
        ti: '.CeilingSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: '_GenericApplicationPropertyOfFloorSurface',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfWindow',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfOpening',
        ti: 'AnyType'
      }, {
        en: '_BoundarySurface',
        ti: '.AbstractBoundarySurfaceType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/1.0'
        }
      }, {
        en: '_GenericApplicationPropertyOfRoofSurface',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfClosureSurface',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfGroundSurface',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfAbstractBuilding',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfBuilding',
        ti: 'AnyType'
      }, {
        en: 'GroundSurface',
        ti: '.GroundSurfaceType',
        sh: '_BoundarySurface'
      }, {
        en: 'BuildingFurniture',
        ti: '.BuildingFurnitureType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/1.0'
        }
      }, {
        en: 'Room',
        ti: '.RoomType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/1.0'
        }
      }, {
        en: 'Building',
        ti: '.BuildingType',
        sh: '_AbstractBuilding'
      }, {
        en: '_GenericApplicationPropertyOfIntBuildingInstallation',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfDoor',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfWallSurface',
        ti: 'AnyType'
      }, {
        en: '_GenericApplicationPropertyOfBuildingPart',
        ti: 'AnyType'
      }, {
        en: 'Window',
        ti: '.WindowType',
        sh: '_Opening'
      }, {
        en: 'BuildingPart',
        ti: '.BuildingPartType',
        sh: '_AbstractBuilding'
      }, {
        en: '_Opening',
        ti: '.AbstractOpeningType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/1.0'
        }
      }, {
        en: 'BuildingInstallation',
        ti: '.BuildingInstallationType',
        sh: {
          lp: '_CityObject',
          ns: 'http:\/\/www.opengis.net\/citygml\/1.0'
        }
      }, {
        en: 'RoofSurface',
        ti: '.RoofSurfaceType',
        sh: '_BoundarySurface'
      }]
  };
  return {
    CityGML_Building_1_0: CityGML_Building_1_0
  };
};
if (typeof define === 'function' && define.amd) {
  define([], CityGML_Building_1_0_Module_Factory);
}
else {
  var CityGML_Building_1_0_Module = CityGML_Building_1_0_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.CityGML_Building_1_0 = CityGML_Building_1_0_Module.CityGML_Building_1_0;
  }
  else {
    var CityGML_Building_1_0 = CityGML_Building_1_0_Module.CityGML_Building_1_0;
  }
}