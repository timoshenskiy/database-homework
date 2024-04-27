class ColumnCondition(DataModel):
    column: str
    condition: str
    value: str


class AndCondition(DataModel):
    and_: List[Union['ColumnCondition', 'AndCondition', 'OrCondition']]


class OrCondition(DataModel):
    or_: List[Union['ColumnCondition', 'AndCondition', 'OrCondition']]

class MappingCondition(DataModel):
    condition: AndCondition | OrCondition


class Mapping(DataModel):
    original_title: str
    new_title: str
    conditions: Optional[MappingCondition] = None


class TableMapping(DataModel):
    table_name: str
    mapping: List[Mapping]


class DataModel(DataModel):
    data: List[TableMapping]