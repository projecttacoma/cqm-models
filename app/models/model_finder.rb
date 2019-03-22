module QDM
  class ModelFinder

    @hqmfToOidMap = JSON.parse(File.read(File.join(File.dirname(__FILE__), 'hqmfOid_to_datatype_map.json')))

    def self.byHqmfOid(hqmfOid)
      return QDM.const_get(@hqmfToOidMap[hqmfOid])
    end
  end
end